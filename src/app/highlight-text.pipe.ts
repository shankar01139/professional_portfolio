// src/app/highlight-text.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Needed for [innerHTML] binding

@Pipe({
  name: 'highlightText' // This is the name used in your HTML: | highlightText
})
export class HighlightTextPipe implements PipeTransform {
  
  // Inject DomSanitizer to mark the HTML as safe (required when using [innerHTML])
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Transforms the input text by wrapping specified phrases in <b> tags.
   * @param value The original string (the quote).
   * @param phrasesToHighlight An array of strings to find and highlight.
   * @returns The HTML string with highlights.
   */
  transform(value: string, phrasesToHighlight: string[]): SafeHtml {
    if (!value || !phrasesToHighlight || phrasesToHighlight.length === 0) {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }

    let result = value;
    
    phrasesToHighlight.forEach(phrase => {
      // Escape special characters for use in a regular expression
      const safePhrase = phrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      
      // Create a global, case-insensitive regular expression
      const regex = new RegExp(safePhrase, 'gi'); 
      
      // Replace the found phrase with itself wrapped in <b> tags
      result = result.replace(regex, (match) => `<b>${match}</b>`);
    });

    // Angular blocks HTML insertion by default for security. 
    // We must bypass this security for the highlighted HTML to render.
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}