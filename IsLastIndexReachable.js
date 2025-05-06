// Function to check if
// last index can be reached
function isPossibleLastIndex(jumps,n)
{
	// Variables to destination index and
	// the furthest jump possible
	let LastAccuratePos = n - 1;
	let FurthestJump = 0;
    console.log(LastAccuratePos)
	for (let i = n - 2; i >= 0; i--) {

		// Furthest jump possible from index i
		FurthestJump = jumps[i] + i;
        console.log('FurthestJump', i, FurthestJump, LastAccuratePos)
		// If this furthest jump is able to reach
		// current destination then update destination
		// to the current index
		if (FurthestJump >= LastAccuratePos)
			LastAccuratePos = i;
	}
    console.log('LastAccuratePos', LastAccuratePos)
	// Check if destination successfully reached 0
	return LastAccuratePos == 0;
}

// Driver code
let jumps = [3, 2,0, 0,2,0,1]//[2, 3, 1, 0, 2, 0, 1]//[2, 3, 1, 1, 4];
let N = jumps.length;
	console.log(isPossibleLastIndex(jumps, N));
