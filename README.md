# Angular Pipe: Titlecase preserving uppercase
Angular pipe for converting a string to **`titlecase`** preserving any existing **`uppercase`**

> The built-in `titlecase` does what it says but there may be occasions when you need your `uppercase` in a string to be preserved while converting the string to titlecase.

## Example
    
    {{ 'IP address' | titlecase }}

The above code will result in: `Ip Address`, which is not at all what we need.

This custom pipe is aimed to solve the above problem.

    {{ 'IP address' | titlecaseWithUpper }}

This will result in: **`IP Address`**. Looks perfect! :tada:
