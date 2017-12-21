class DomQuery {

  constructor(selector, scope = null) {
    if (typeof selector === 'object') {
      this.items = [selector];
    } else {
      if (scope instanceof DomQuery) {
        scope = scope.items[0];
      }
      const domElement = scope ? scope : window.document;
      this.items = [...domElement.querySelectorAll(selector)];
    }
  }

  value(value = null) {
    if (value !== null) {
      this.items.forEach(item => (item.value = value));
    } else {
      return this.items[0].value;
    }
  }

  html(value = null) {
    if (value !== null) {
      this.items.forEach(item => (item.innerHTML = value));
    } else {
      return this.items[0].innerHTML;
    }
  }

  addClass(className) {
    this.items.forEach((item) => {
      if (!item.className.split(' ').includes(className)) {
        item.className += ` ${className}`;
      }
    });
  }

  hasClass(className) {
    let hasClass = false;
    this.items.forEach(item => {
      const classNames = item.className.split(' ');
      if (classNames.includes(className)) {
        hasClass = true;
      }
    });
    return hasClass;
  }

  removeClass(className) {
    this.items.forEach((item) => {
      const classNames = item.className.split(' ');
      if (classNames.includes(className)) {
        delete classNames[classNames.indexOf(className)];
        item.className = classNames.join(' ');
      }
    });
    return this;
  }

  toggleClass(className, isActive = null) {
    this.items.forEach(item => {
      const classNames = item.className.split(' ');
      if (isActive === null) {
        isActive = !classNames.includes(className);
      }
      if (isActive && !classNames.includes(className)) {
        classNames.push(className);
      } else if (!isActive && classNames.includes(className)) {
        delete classNames[classNames.indexOf(className)];
      }
      item.className = classNames.join(' ');
    });
    return this;
  }

  each(iterateFn) {
    this.items.forEach(iterateFn);
    return this;
  }

  addListener(type, listener) {
    this.items.forEach(item => {
      item.addEventListener(type, listener);
    });
    return this;
  }

  focus(listener) {
    return this.addListener('focus', listener);
  }

  blur(listener) {
    return this.addListener('blur', listener);
  }

  submit(listener) {
    return this.addListener('submit', listener);
  }

  click(listener) {
    return this.addListener('click', listener);
  }

  keyup(listener) {
    return this.addListener('keyup', listener);
  }

  scroll(listener) {
    return this.addListener('scroll', listener);
  }

  change(listener) {
    return this.addListener('change', listener);
  }

  input(listener) {
    return this.addListener('input', listener);
  }

}

export default function $(query, scope) {
  return new DomQuery(query, scope);
}
