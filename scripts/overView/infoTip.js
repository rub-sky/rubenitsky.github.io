/* global d3*/
let infoTip = null;

/**
 * config sets the infoTip (description, item name, and id) is set to be appended to the body under a div tag
 * The class for the infoTip is set here as well under 'nodeInfoTip'. All of this is given a default blank text field.
 */
function configureInfoTip () {
  infoTip = d3.select('body').append('div')
    .attr('class', 'nodeInfoTip').text('');
}

/**
 * hide sets the status on the infoTip to 'hidden'
 */
function nodeInfoTipHide () {
  infoTip.html('').style('visibility', 'hidden');
}

/**
 * update sets the text parameters to the text passed in, and aligns it to the node, with an offset on the y axis
 * lastly, it sets the visibility to visible
 * @param text
 */
function nodeInfoTipUpdate (text) {
  infoTip.html(text)
    .style('left', (d3.event.pageX) + 'px')
    .style('top', (d3.event.pageY + 30) + 'px')
    .style('visibility', 'visible');
}
