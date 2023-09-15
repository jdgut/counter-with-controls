import React from "react";
import Counter from '../components/Counter';

/**
 * Converts the given number of seconds into a formatted string.
 *
 * @param {number} seconds - The number of seconds to format.
 * @returns {string[]} An array of string digits representing the formatted seconds.
 */
export function formattedString(seconds) {
    return seconds.toString().padStart(6, '0').split('');
}

/**
 * Starts a counter that renders the Counter component at regular intervals.
 *
 * @param {number} currentValue - The initial counter value.
 * @param {ReactDOM} root - The root element to render the Counter component.
 */
export function startCounter(currentValue, root) {
    renderComponent(currentValue, root);
}

/**
 * Pauses the counter by clearing the interval.
 *
 * @param {number} intervalId - The ID of the interval to clear.
 */
export function pauseCounter(intervalId) {
    clearTimeout(intervalId);
}

/**
 * Stops the counter by clearing the interval and rendering a static Counter component.
 *
 * @param {number} intervalId - The ID of the interval to clear.
 * @param {ReactDOM} root - The root element to render the static Counter component.
 */
export function stopCounter(intervalId, root) {
    clearTimeout(intervalId);
    renderStaticComponent(0, root);
}

/**
 * Increases the counter value by 1.
 *
 * @param {number} value - The current counter value.
 * @returns {number} The increased counter value.
 */
export function increaseCounter(value) {
    const counterVal = value + 1;
    return counterVal;
}

/**
 * Renders the Counter component with a continuously increasing value.
 *
 * @param {number} start - The initial counter value.
 * @param {ReactDOM} root - The root element to render the Counter component.
 */
export function renderComponent(start, root) {
    let seconds = increaseCounter(start);
    const counterInterval = setInterval(() => {
        console.log(seconds);
        root.render(
          <React.StrictMode>
            <Counter digits={seconds} intervalId={counterInterval} root={root} />
          </React.StrictMode>
        );
        seconds = increaseCounter(seconds);
      }, 1000);
}

/**
 * Renders a static Counter component with the given value.
 *
 * @param {number} start - The value to display in the static Counter component.
 * @param {ReactDOM} root - The root element to render the static Counter component.
 */
export function renderStaticComponent(start, root) {
    root.render(
        <React.StrictMode>
          <Counter digits={start} root={root} />
        </React.StrictMode>
      );
}
