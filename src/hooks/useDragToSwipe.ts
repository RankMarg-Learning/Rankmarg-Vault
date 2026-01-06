import { useRef, useCallback, useState, useEffect, TouchEvent, MouseEvent } from 'react';

interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  deltaX: number;
  deltaY: number;
}

interface DragToSwipeConfig {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onDrag?: (deltaX: number, deltaY: number) => void;
  onDragEnd?: () => void;
  threshold?: number;
  disabled?: boolean;
}

export function useDragToSwipe({
  onSwipeLeft,
  onSwipeRight,
  onDrag,
  onDragEnd,
  threshold = 100,
  disabled = false,
}: DragToSwipeConfig) {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    deltaX: 0,
    deltaY: 0,
  });

  const dragStateRef = useRef<DragState>(dragState);
  dragStateRef.current = dragState;

  const handleStart = useCallback(
    (clientX: number, clientY: number, target?: EventTarget | null): boolean => {
      if (disabled) return false;
      
      // Allow drag to start on any element - we'll determine swipe vs scroll based on movement direction
      setDragState({
        isDragging: true,
        startX: clientX,
        startY: clientY,
        currentX: clientX,
        currentY: clientY,
        deltaX: 0,
        deltaY: 0,
      });
      return true;
    },
    [disabled]
  );

  const handleMove = useCallback(
    (clientX: number, clientY: number, target?: EventTarget | null): boolean => {
      if (!dragStateRef.current.isDragging || disabled) return false;

      const deltaX = clientX - dragStateRef.current.startX;
      const deltaY = clientY - dragStateRef.current.startY;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // If horizontal movement is dominant, prevent default scrolling
      const isHorizontalSwipe = absDeltaX > absDeltaY && absDeltaX > 10;

      setDragState((prev) => ({
        ...prev,
        currentX: clientX,
        currentY: clientY,
        deltaX,
        deltaY,
      }));

      onDrag?.(deltaX, deltaY);

      // Return whether this is a horizontal swipe (to prevent scrolling)
      return isHorizontalSwipe;
    },
    [onDrag, disabled]
  );

  const handleEnd = useCallback(() => {
    if (!dragStateRef.current.isDragging || disabled) return;

    const { deltaX, deltaY } = dragStateRef.current;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Determine if horizontal swipe
    if (absDeltaX > absDeltaY && absDeltaX > threshold) {
      if (deltaX > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    }

    setDragState({
      isDragging: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      deltaX: 0,
      deltaY: 0,
    });

    onDragEnd?.();
  }, [onSwipeLeft, onSwipeRight, onDragEnd, threshold, disabled]);

  // Touch handlers
  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      const touch = e.touches[0];
      const shouldStart = handleStart(touch.clientX, touch.clientY, e.target);
      if (shouldStart) {
        e.preventDefault();
      }
    },
    [handleStart]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!dragStateRef.current.isDragging) return;
      const touch = e.touches[0];
      const isHorizontalSwipe = handleMove(touch.clientX, touch.clientY, e.target);
      // Only prevent default if it's a horizontal swipe to allow vertical scrolling
      if (isHorizontalSwipe) {
        e.preventDefault();
      }
    },
    [handleMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Mouse handlers
  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      const shouldStart = handleStart(e.clientX, e.clientY, e.target);
      if (shouldStart) {
        e.preventDefault();
      }
    },
    [handleStart]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragStateRef.current.isDragging) return;
      handleMove(e.clientX, e.clientY, e.target);
    },
    [handleMove]
  );

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Add global mouse listeners when dragging
  const handleMouseMoveGlobal = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!dragStateRef.current.isDragging) return;
      handleMove(e.clientX, e.clientY, e.target);
    },
    [handleMove]
  );

  const handleMouseUpGlobal = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Set up global listeners
  useEffect(() => {
    if (dragState.isDragging) {
      document.addEventListener('mousemove', handleMouseMoveGlobal);
      document.addEventListener('mouseup', handleMouseUpGlobal);
      return () => {
        document.removeEventListener('mousemove', handleMouseMoveGlobal);
        document.removeEventListener('mouseup', handleMouseUpGlobal);
      };
    }
  }, [dragState.isDragging, handleMouseMoveGlobal, handleMouseUpGlobal]);

  return {
    dragState,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
    },
  };
}

