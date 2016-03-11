function BinarySearchTree() {
    this._root = null;
}

//BinarySearchTree Interface
BinarySearchTree.prototype = {

    //restore constructor
    constructor: BinarySearchTree,

    add: function (value){
    },

    contains: function(value){
    },

    remove: function(value){
    },

    size: function(){
    },

    toArray: function(){
    },

    toString: function(){
    }

};

//Actual Implementation
BinarySearchTree.prototype = {
	contains: function(value){
		var found = false;
		var current = this._root;

		while(!found && current){
			if(value < current.value){
				current = current.left;
			}else if(value > current.value){
				current = current.right;
			}else{
				found = true;
			}
		}
		return found;
	},
	add: function(value){
		var node = {
			value: value,
			left:null,
			right:null
		};
		if(this._root == null){
			this._root = node;
		}else{
			current = this._root;
			var isAdded = false;
			while(!isAdded){
				if(value < current.value){
					if(current.left == null){
						current.left = node;
						isAdded = true;
					}else{
						current = current.left;
					}
				}else if(value > current.value){
					if(current.right == null){
						current.right = node;
						isAdded = true;
					}else{
						current = current.right;
					}
				}else{
					//value already exist;
					break;
				}
			}
		}
	},

	//helper function to traverse
	traverse: function(process){

		//inner helper function
		function inOrder(node){
			if(node){

				if(node.left !== null){
					inOrder(node.left);
				}

				//Call the process method on this node
				process.call(this, node);

				if(node.right !== null){
					inOrder(node.right);
				}

			}
		}

		inOrder(this._root);

	},

	//Get the size (total number of nodes)
	size: function(){
		var length = 0;
		this.traverse(function(node){
			length++;
		});
		return length;
	},

	toArray: function(){
		var result = [];
		this.traverse(function(node){
			result.push(node.value);
		});
		return result;
	},

	toString: function(){
		return this.toArray().toString();
	}
}