/** Angular imports */
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Angular pipe for making a string titlecase preserving any existing uppercase
 *
 * Usage: {{ 'IP address' | titlecaseWithUpper }}
 *
 * Result: IP Address
 */
@Pipe({ name: 'titlecaseWithUpper' })
export class MyTitleCasePipe implements PipeTransform {
    /**
     * Private function to convert provided word to titlecase
     *
     * @param s - string
     * @returns string
     */
    private _makeTitlecase(s: string) {
        if (typeof (s) === 'string') {
            return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
        } else {
            return '';
        }
    }

   /**
    * Main transform function for the pipe
    *
    * @param value - string
    * @returns string
    */
    transform(value: string): string {
        if (typeof (value) === 'string') {
            let finalString = '';
            const stringArr = value.split(' ');

            stringArr.forEach((word, index) => {
                // Preserve Uppercase else make the word titlecase
                finalString += word === word.toUpperCase() ? word : this._makeTitlecase(word);

                // Add space after every word except last
                finalString += index < stringArr.length - 1 ? ' ' : '';
            });

            return finalString;
        } else {
            return value;
        }
    }
}
