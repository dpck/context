# This is testing the output of `render` method run on the VNode without any external dependencies (see context).

## returns the correct output
<div className="Class" id="test"></div>

/* expected */
<div class="Class" id="test"></div>
/**/

## renders boolean
<div required data-required />

/* expected */
<div required data-required></div>
/**/