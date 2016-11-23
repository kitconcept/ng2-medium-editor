// Imports
import {
    ElementRef,
    EventEmitter
} from '@angular/core';
import {NgControl, ControlValueAccessor} from '@angular/forms';

/**
 * MediumEditor component
 */
export declare class MediumContentEditor implements ControlValueAccessor {

    value:any;
    instance:any;
    change:EventEmitter<any>;

    constructor(elementRef:ElementRef, ngControl:NgControl);
    editorInit(config:any):void;
    hackUpdate():void;

    // ControlValueAccessor
    writeValue(value:any):void;
    onChange(_:any):void;
    registerOnChange(fn:Function):void;
    registerOnTouched(fn:Function):void;

}
