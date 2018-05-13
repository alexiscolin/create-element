# create-element
🏗️ This function creates DOM elements with styles, attributes, content and let you insert them in the DOM through multiple options.

## SYNTAX
**``` createElement([option, insert]); ```**

## USE

```javascript

import createElement from 'create-element';

let el = createElement({
    type: 'a',
    link: 'image.png',
    style: 'my-first-style my-second-style',
    attributes: {'target': '_blank', 'title': 'this is awesome'},
    content: 'click here'
  },{
    target: document.getElementById('target'),
    type: 'sibling',
    method: 'after'
  });

```

## OPTIONS AND SETTINGS
This function has two optionals parameters you can use with object type argument. 
The first one is set in order to define element configuration wherheas the second one is used in order to configure insertion in the DOM. Several **optional** properties can be set inside of them:

### Option object (1st argument)

<div class="tg-wrap"><table>
  <tr>
    <th>option</th>
    <th>type</th>
    <th>explanation</th>
    <th>exemple</th>
  </tr>
  <tr valign="middle">
    <td><b>type</b> - default: 'div'</td>
    <td>String</td>
    <td>Element type you want to create</td>
    <td valign="middle"><pre><code>'type' : 'img'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td><b>id</b></td>
    <td>String</td>
    <td>Id that you may want to set on the element.</td>
    <td valign="middle"><pre><code>'id' : 'myID'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td rowspan="2"><b>style</b></td>
    <td>String</td>
    <td>You can set one or multiple classes by adding them in string separated by space.</td>
    <td valign="middle"><pre><code>'style': 'style1 style2'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td>Object</td>
    <td>You can also set inline style using an object listing all the style you want to apply, separated by comma.</td>
    <td valign="middle">
<pre><code>'style': {
  'height': '200px', 
  'z-index': '-1'
}</code></pre></td>
  </tr>
  <tr valign="middle">
    <td><b>attributes</b></td>
    <td>Object</td>
    <td>List of attributes to apply. Think about `target` or `title` for &lt;a&gt; element or `alt` for &lt;img&gt; element. Data attributes can also be set.</td>
    <td valign="middle">
<pre><code>'attributes': {
  'data-attr' : 'true',
  'target': '_blank',
  'title': 'titre'
}</code></td>
  </tr>
  <tr valign="middle">
    <td><b>src</b></td>
    <td>String</td>
    <td>Link to the image for src attribute on media elements.</td>
    <td valign="middle"><pre><code>'src' : './myimage.png'</code></pre></td>
  </tr>
  <tr>
    <td><b>link</b></td>
    <td>String</td>
    <td>Target you want to link with href attribute on link elements (internal or external links are OK)</td>
    <td valign="middle"><pre><code>'link' : 'mylink.html'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td rowspan="2"><b>content</b></td>
    <td>String</td>
    <td>String that will be added to the content of the new element.</td>
      <td valign="middle"><pre><code>'content' : 'my content here'</code></pre></td>
  </tr>
  <tr valign="middle">
    <td>HTMLNode</td>
    <td>Node that will be added to the content of the new element</td>
    <td valign="middle"><pre><code>'content': '&lt;span&gt;here&lt;/span&gt;'</code></pre></td>
  </tr>
</table></div>

 
### Insert object (2nd argument)
<div class="tg-wrap"><table>
  <tr>
    <th>option</th>
    <th>type</th>
    <th>value</th>
    <th>explanation</th>
    <th>exemple</th>
  </tr>
  <tr>
    <td><b>target</b></td>
    <td>HTMLNode</td>
    <td></td>
    <td>Target element that is the reference for adding the new elements in the DOM.</td>
      <td valign="middle"><pre><code>'target' : targetEl</code></pre></td>
  </tr>
  <tr>
    <td rowspan="2"><b>type</b> - default: 'sibling'</td>
    <td rowspan="2">String</td>
    <td>sibling</td>
    <td>The new element will be adding as a sibling of the targeted element.</td>
      <td valign="middle"><pre><code>'type' : 'sibling'</code></pre></td>
  </tr>
  <tr>
    <td>container</td>
    <td>The new element will be adding as a child of targeted element.</td>
    <td valign="middle"><pre><code>'type' : 'container'</code></pre></td>
  </tr>
  <tr>
    <td rowspan="2"><b>method</b> default: 'after'</td>
    <td rowspan="2">String</td>
    <td>before</td>
    <td>The new element will be added before the target in case of sibling type or as a first child of the target in case of container type.</td>
    <td valign="middle"><pre><code>'method' : 'before'</code></pre></td>
  </tr>
  <tr>
    <td>after</td>
    <td>The new element will be added after the target in case of sibling type or as a last child of the target in case of container type.</td>
    <td valign="middle"><pre><code>'method' : 'after'</code></pre></td>
  </tr>
</table></div>

