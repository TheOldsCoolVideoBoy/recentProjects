/* This is a simple exercise to understand the feature in the javascript language called closure.

The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.

The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.
 */

function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
    
	  (function (number){
      res.push(function()
        {
          return number;
        })      
    })(i);
	}
	return res
}

/*** TEST ***\

describe("Tests", () => {
  it("test", () => {
for(var i = 0; i< 10; i++){
  Test.assertEquals(buildFun(10)[i](), i);
}
});
});

 */