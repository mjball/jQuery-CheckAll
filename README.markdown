# jQuery CheckAll Plugin #

It's really simple.

### Using the plugin ###

To use the checkbox with id `master` to control the checkboxes that are children of the form with id `myForm`, you would use a line of code such as:

    $('#master').checkAll('myForm input:checkbox');

If you want to set any options differently from the default, pass in an `options` object as the second argument:

    $('#master').checkAll('myForm input:checkbox', {sync: false});

### Options ###

All are optional (pun intended).

     key           | default | description
    ----------------------------------------------------------------------------------------
     sync          |  true   | boolean, keep the master sync'd with the slaves when a slave changes
     onClick       |  null   | callback function, called whenever a slave checkbox is clicked
     onMasterClick |  null   | callback function, called when the master checkbox is clicked
     reportTo      |  null   | callback function, receives the number of slaves currently checked