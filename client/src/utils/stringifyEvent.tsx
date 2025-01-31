// StackOverflow: https://stackoverflow.com/a/34519193
const stringifyEvent = (e: any) => {
    if (e) {
        const obj = {
          eventName: e.toString(),
          altKey: e.altKey,
          bubbles: e.bubbles,
          button: e.button,
          buttons: e.buttons,
          cancelBubble: e.cancelBubble,
          cancelable: e.cancelable,
          clientX: e.clientX,
          clientY: e.clientY,
          composed: e.composed,
          ctrlKey: e.ctrlKey,
          currentTarget: e.currentTarget ? e.currentTarget.outerHTML : null,
          defaultPrevented: e.defaultPrevented,
          detail: e.detail,
          eventPhase: e.eventPhase,
          fromElement: e.fromElement ? e.fromElement.outerHTML : null,
          isTrusted: e.isTrusted,
          layerX: e.layerX,
          layerY: e.layerY,
          metaKey: e.metaKey,
          movementX: e.movementX,
          movementY: e.movementY,
          offsetX: e.offsetX,
          offsetY: e.offsetY,
          pageX: e.pageX,
          pageY: e.pageY,
          relatedTarget: e.relatedTarget ? e.relatedTarget.outerHTML : null,
          returnValue: e.returnValue,
          screenX: e.screenX,
          screenY: e.screenY,
          shiftKey: e.shiftKey,
          sourceCapabilities: e.sourceCapabilities ? e.sourceCapabilities.toString() : null,
          target: e.target ? e.target.outerHTML : null,
          timeStamp: e.timeStamp,
          toElement: e.toElement ? e.toElement.outerHTML : null,
          type: e.type,
          view: e.view ? e.view.toString() : null,
          which: e.which,
          x: e.x,
          y: e.y
        };
    
        // console.log(JSON.stringify(obj, null, 2));
        // return JSON.stringify(obj, null, 2)
        return obj;
      }
  }

  export default stringifyEvent;