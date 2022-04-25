'use strict';

class Features {
  constructor(json) {
    this.jsonObj = json;
  }

  size(){
  	if (this.jsonObj == null)
		return 0;

	return Object.keys(this.jsonObj).length;
  }

  active(feature_name){
  	if (this.jsonObj == null)
		return false;

	return this.jsonObj[feature_name];
  }
}

//module.exports = Features
