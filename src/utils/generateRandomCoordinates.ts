type Point = {
  lat: number,
  lng: number,
}


/**
* Generates number of random geolocation points given a center and a radius.
* @param  {Point} center A JS object with lat and lng attributes.
* @param  {number} radius Radius in meters.
* @param {number} count Number of points to generate.
* @return {Point[]} Array of Objects with lat and lng attributes.
*/
export function generateRandomPoints(center: Point, radius : number, count : number) : Point[]{
  var points = [];
  for (var i=0; i<count; i++) {
    points.push(generateRandomPoint(center, radius));
  }
  return points;
}


/**
* Generates number of random geolocation points given a center and a radius.
* 
* @param  {Center} center A JS object with lat and lng attributes.
* @param  {number} radius Radius in meters.
* @return {Object} The generated random points as JS object with lat and lng attributes.
*/
export function generateRandomPoint(center: Point, radius : number) : Point {
  var x0 = center.lng;
  var y0 = center.lat;
  // Convert Radius from meters to degrees.
  var rd = radius/111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x/Math.cos(y0);

  // Resulting point.
  return {lat : y+y0, 'lng': xp+x0};
}


// Usage Example.
// Generates 100 points that is in a 1km radius from the given lat and lng point.
// var randomGeoPoints = generateRandomPoints({'lat':24.23, 'lng':23.12}, 1000, 100);