import { renderHook, act } from '@testing-library/react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

describe('useScrollProgress', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
    Object.defineProperty(document.documentElement, 'scrollHeight', { writable: true, configurable: true, value: 1000 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 500 });
  });

  it('useScrollProgress_initialState_returnsZero', () => {
    // Arrange
    window.scrollY = 0;

    // Act
    const { result } = renderHook(() => useScrollProgress());

    // Assert
    expect(result.current).toBe(0);
  });

  it('useScrollProgress_scrolledHalfway_returnsPointFive', () => {
    // Arrange
    window.scrollY = 250;

    // Act
    const { result } = renderHook(() => useScrollProgress());
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert
    expect(result.current).toBeCloseTo(0.5);
  });

  it('useScrollProgress_scrolledToBottom_returnsOne', () => {
    // Arrange
    window.scrollY = 500;

    // Act
    const { result } = renderHook(() => useScrollProgress());
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert
    expect(result.current).toBeCloseTo(1);
  });

  it('useScrollProgress_noScrollableContent_returnsZero', () => {
    // Arrange — document height equals window height (no overflow)
    Object.defineProperty(document.documentElement, 'scrollHeight', { writable: true, configurable: true, value: 500 });
    window.scrollY = 0;

    // Act
    const { result } = renderHook(() => useScrollProgress());

    // Assert
    expect(result.current).toBe(0);
  });

  it('useScrollProgress_unmount_removesScrollListener', () => {
    // Arrange
    const removeSpy = vi.spyOn(window, 'removeEventListener');

    // Act
    const { unmount } = renderHook(() => useScrollProgress());
    unmount();

    // Assert
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeSpy.mockRestore();
  });
});
