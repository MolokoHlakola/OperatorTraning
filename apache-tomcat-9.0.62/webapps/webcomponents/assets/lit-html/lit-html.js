/// BareSpecifier=lit-html/lit-html
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */
import { defaultTemplateProcessor } from './lib/default-template-processor.js?version=4d367c6d';
import { SVGTemplateResult, TemplateResult } from './lib/template-result.js?version=4d367c6d';
export { DefaultTemplateProcessor, defaultTemplateProcessor } from './lib/default-template-processor.js?version=4d367c6d';
export { directive, isDirective } from './lib/directive.js?version=4d367c6d';
// TODO(justinfagnani): remove line when we get NodePart moving methods
export { removeNodes, reparentNodes } from './lib/dom.js?version=4d367c6d';
export { noChange, nothing } from './lib/part.js?version=4d367c6d';
export { AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart } from './lib/parts.js?version=4d367c6d';
export { parts, render } from './lib/render.js?version=4d367c6d';
export { templateCaches, templateFactory } from './lib/template-factory.js?version=4d367c6d';
export { TemplateInstance } from './lib/template-instance.js?version=4d367c6d';
export { SVGTemplateResult, TemplateResult } from './lib/template-result.js?version=4d367c6d';
export { createMarker, isTemplatePartActive, Template } from './lib/template.js?version=4d367c6d';
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
export const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
export const svg = (strings, ...values) => new SVGTemplateResult(strings, values, 'svg', defaultTemplateProcessor);
//# sourceMappingURL=lit-html.js.map