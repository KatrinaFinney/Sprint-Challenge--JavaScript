

  class CuboidMaker2{
    constructor(attrs){
    this.cLength = attrs.cLength;
    this.width = attrs.width;
    this.height = attrs.height;  
    }  
    volume(){
        return (this.cLength * this.height* this.width)
    }
    surfaceArea(){
        return 2 * (this.cLength * this.width + this.cLength * this.height + this.width * this.height)
    }
  }
  class CubeMaker extends CuboidMaker2{
    constructor(childAttrs){
        super(childAttrs);
        
    }  
    
  }


  const cuboid2 = new CuboidMaker2({
   
      cLength: 4,
      width: 5,
      height: 5,
    
    
  });
  const cuboid3 = new CuboidMaker2({
   
    cLength: 5,
    width: 10,
    height: 5,
  
  
});
const cuboid4 = new CuboidMaker2({
   
  cLength: 20,
  width: 10,
  height: 20,


});
//Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid2.volume()); // 100
 console.log(cuboid2.surfaceArea()); // 130
 console.log(cuboid3.volume()); 
 console.log(cuboid3.surfaceArea()); 
 console.log(cuboid4.volume()); 
 console.log(cuboid4.surfaceArea()); 
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.