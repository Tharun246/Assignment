let final = '';
let isResultDisplayed = false;

const clicked = (event) => {
  const el = event.target;
  
  if (el.tagName === 'BUTTON') {

    if (isResultDisplayed && el.textContent !== '=') {
      final = 0;
      isResultDisplayed = false;
    }

    if (el.textContent === '=') {
        final = evaluateExpression(final.replace(/×/g, '*').replace(/÷/g, '/'));
    } 
    if(el.textContent === 'C')
    {   
        
        final=removeLastCharacter(final);
    }
    else if (el.textContent === 'AC') {
      final = 0;
      isResultDisplayed = false;
    } 
    else 
    {
        if(final === 0)
        {
            final = isResultDisplayed ? final+el.textContent : el.textContent;
            if(final.charAt(final.length-1) === '=')
            { 
                final=removeLastCharacter(final);
            }
        }
        else
        { 
            final = isResultDisplayed ? el.textContent : final+el.textContent;
            if(final.charAt(final.length-1) === '=')
            { 
                final=removeLastCharacter(final);
            }

        }   
    }

     upValue(final);
  }
};



function removeLastCharacter(str) {
    if (str.length <= 1) {
      return '';
    }
    return str.slice(0, -1);
  }

const upValue=(value)=> 
{ 
    const tagval=document.querySelector('.calc-out.calc-res');
    if(tagval)
    { 
        tagval.textContent=value;
    }
}
function evaluateExpression(expression) {
    try {
       
        return eval(expression);
    } catch (error) {
        // Handle invalid expressions
        return 'Error';
    }
}