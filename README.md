# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The big $\Theta$ complexity of my implementation of the code is $\Theta(v^2)$. This is because the first for loop goes through all the nodes $v$ times to initialize their distance to be infinite and the source node to 0. Then the main while loop takes $v$ iterations to find the closest node and $v$ iterations to update the distance which adds up to $2v$.

In total it is $v * 2v = 2v^2$. Asymptotically constants are ignored, so the time complexity is $\Theta(v^2)$.



References:

https://www.youtube.com/watch?v=_lHSawdgXpI used the video to undestand how dijkstra's algorithm works with exmaples of graphs

https://www.cs.usfca.edu/~galles/visualization/Dijkstra.html visulized the dijkstra's algorithm to better understand how to loop through the nodes 

https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/ helped me with the pseudo code for writing the algorithm

dijkstra-s-algorithm-CollinDavis03 looked at this repository for initialization of the distances for the nodes to be infinite and the source node to be 0

ChatGPT helped me write the check for a empty graph. I was able to write it originally for the source node not being in the graph but wasn't sure how to check weather the graph is actually empty. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice