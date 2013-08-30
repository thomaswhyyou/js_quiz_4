//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];


Array.prototype.sort = function() {
  var temp_array = [];
  var target_index;
  var target_number;
  var max_i = this.length;
  for (var i = 0; i < max_i; i++ ) {
    target_index = this.indexOf(Math.min.apply(null, this));
    target_number_array = this.splice(target_index, 1);
    temp_array.push(target_number_array);
  }
  // debugger;
  sorted_array = [].concat.apply([], temp_array);
  return sorted_array;
};


