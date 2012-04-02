# jQuery CheckAll Plugin #

## It's really simple. ##

Basic demo: http://jsfiddle.net/mattball/NBrg8/

### Using the plugin ###

To use the checkbox with id `master` to control the checkboxes that are children of the form with id `myForm`, this is all you need:

```
$('#master').checkAll('#myForm input:checkbox');
```

To override any of the default settings, pass in an `options` object as the second argument. For instance, if I don't want to update the master checkbox when a slave is changed:

```
$('#master').checkAll('#myForm input:checkbox', {sync: false});
```

### Options ###

All are optional (pun intended).

```
key           | default | description
---------------------------------------------------------------------------------------
sync          |  true   | boolean, keep the master sync'd with the slaves when a slave changes
onClick       |  null   | callback function, called whenever a slave checkbox is clicked
onMasterClick |  null   | callback function, called when the master checkbox is clicked
reportTo      |  null   | callback function, receives the number of slaves currently checked
```
     
### Bonus awesomeness ###

- [It doesn't break if you accidentally select the master checkbox along with the slaves.](http://jsfiddle.net/mattball/fCEPa/)
- It's lightweight thanks to `.live()`, so it can handle [as many checkboxes as you want to throw at it](http://jsfiddle.net/mattball/ZBjUV/).
- Compatibility tested with jQuery 1.4.2 through 1.7.1.