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
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onDrag?: (deltaX: number, deltaY: number) => void;
  onDragEnd?: () => void;
  threshold?: number;
  disabled?: boolean;
  checkScroll?: boolean; // If true, checks scroll position before allowing vertical swipes
}

export function useDragToSwipe({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onDrag,
  onDragEnd,
  threshold = 50,
  disabled = false,
  checkScroll = false,
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
  const targetRef = useRef<EventTarget | null>(null);

  const isAtTop = (element: HTMLElement) => element.scrollTop <= 0;
  const isAtBottom = (element: HTMLElement) => 
    Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) <= 1;

  const handleStart = useCallback(
    (clientX: number, clientY: number, target?: EventTarget | null): boolean => {
      if (disabled) return false;
      
      let actualTarget = target;
      // Handle text nodes
      if (actualTarget instanceof Text) {
        actualTarget = actualTarget.parentElement;
      }
      
      targetRef.current = actualTarget || null;

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
    (clientX: number, clientY: number): boolean => {
      if (!dragStateRef.current.isDragging || disabled) return false;

      const deltaX = clientX - dragStateRef.current.startX;
      const deltaY = clientY - dragStateRef.current.startY;
      
      // Determine swipe direction
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);

      setDragState((prev) => ({
        ...prev,
        currentX: clientX,
        currentY: clientY,
        deltaX,
        deltaY,
      }));

      onDrag?.(deltaX, deltaY);

      // Return true if we should prevent default (i.e., we are handling this as a swipe)
      if (isHorizontal) {
        return Math.abs(deltaX) > 10;
      }
      
      // Vertical swipe logic
      if (checkScroll && targetRef.current instanceof HTMLElement) {
        const el = targetRef.current.closest('.scrollable-content') as HTMLElement || targetRef.current as HTMLElement;
        // If swiping down (deltaY > 0) and at top -> Allow swipe (prevent scroll)
        if (deltaY > 0 && isAtTop(el)) return true;
        // If swiping up (deltaY < 0) and at bottom -> Allow swipe (prevent scroll)
        if (deltaY < 0 && isAtBottom(el)) return true;
        
        // Otherwise let native scroll happen
        return false;
      }

      return Math.abs(deltaY) > 10;
    },
    [onDrag, disabled, checkScroll]
  );

  const handleEnd = useCallback(() => {
    if (!dragStateRef.current.isDragging || disabled) return;

    const { deltaX, deltaY } = dragStateRef.current;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (absDeltaX > absDeltaY) {
      // Horizontal
      if (absDeltaX > threshold) {
        if (deltaX > 0) onSwipeRight?.();
        else onSwipeLeft?.();
      }
    } else {
      // Vertical
      if (absDeltaY > threshold) {
        // Check scroll requirements if enabled
        let canSwipe = true;
        if (checkScroll && targetRef.current instanceof HTMLElement) {
           const el = targetRef.current.closest('.scrollable-content') as HTMLElement || targetRef.current as HTMLElement;
           if (deltaY > 0 && !isAtTop(el)) canSwipe = false;
           if (deltaY < 0 && !isAtBottom(el)) canSwipe = false;
        }

        if (canSwipe) {
          if (deltaY > 0) onSwipeDown?.(); // Swipe Down (Visual: Pull down -> Go to Prev)
          else onSwipeUp?.(); // Swipe Up (Visual: Push up -> Go to Next)
        }
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
    targetRef.current = null;

    onDragEnd?.();
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onDragEnd, threshold, disabled, checkScroll]);

  // Touch handlers
  const handleTouchStart = useCallback((e: TouchEvent) => {
      const touch = e.touches[0];
      handleStart(touch.clientX, touch.clientY, e.target);
      // Don't prevent default here, let scroll decide
  }, [handleStart]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
      if (!dragStateRef.current.isDragging) return;
      const touch = e.touches[0];
      const shouldPreventDefault = handleMove(touch.clientX, touch.clientY);
      if (shouldPreventDefault && e.cancelable) {
        e.preventDefault();
      }
  }, [handleMove]);

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: MouseEvent) => {
      handleStart(e.clientX, e.clientY, e.target);
  }, [handleStart]);

  const handleMouseMoveGlobal = useCallback((e: globalThis.MouseEvent) => {
      if (!dragStateRef.current.isDragging) return;
      handleMove(e.clientX, e.clientY);
  }, [handleMove]);

  const handleMouseUpGlobal = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

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
    },
  };
}

