  /**
  /*  CREATE-ELEMENT - create DOM element and return it  */
  /*  @param {object} [options] - list of element's configuration */
  /*  @param {object} [insert] - insert element in DOM from function */
  /*  @return {htmlNODE} [elment] - return created element */
  /* */
  export default createElement = function(options = {}, insert = {}){

    // variables
    const config = {
      type: options.type ||  'div',
      id: options.id || null,
      style: options.style ||  null,
      attributes: options.attributes ||  null, // pas oublier alt, target ou title
      src: options.src ||  null,
      link: options.link ||  null,
      content: options.content ||  null
    };
    const { target = null, method:targetMethod = 'after', type:targetType = 'sibling'} = insert;

    // creation
    let el = document.createElement(config.type);

    // id, classes and style
    config.id && (el.id = config.id);
    typeof config.style === 'string' && (el.className = config.style);
    if(typeof config.style === 'object'){
      for(let style in config.style){
        let inline = style.replace( /-([a-z])/ig, (hyphen, char)=>{ return char.toUpperCase(); });
        config.style.hasOwnProperty(style) && (el.style[inline] = config.style[style]);
      }
    }

    // img src and link href
    config.type === 'img' && config.src && (el.src = config.src);
    config.type === 'a' && config.link && (el.href = config.link);

    // attributes
    if(config.attributes){
      for(let attribute in config.attributes){
        config.attributes.hasOwnProperty(attribute) && el.setAttribute(attribute, config.attributes[attribute]);
      }
    }

    //content
    el.innerHTML = config.content && config.content instanceof HTMLElement ? config.content.outerHTML
    : config.content ? config.content
    : null;


    // insertion
    if(target){
      if(target.innerHTML === ""){
        target.innerHTML = el.outerHTML;
      }else{
        const insertParent = targetType === 'container' ? target : target.parentNode;
        const insertPos = targetMethod === 'before' && targetType === 'sibling' ? target
          : targetMethod === 'after' && targetType === 'sibling' ? target.nextSibling
          : targetMethod === 'before' && targetType === 'container' ? target.firstChild
          : targetMethod === 'after' && targetType === 'container' ? target.lastChild.nextSibling
          : null;

        insertParent.insertBefore(el, insertPos);
      }
    }

    return el;
  }
