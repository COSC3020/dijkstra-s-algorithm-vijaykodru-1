function dijkstra(graph, sourceNode) {
    const sptSet = new Set();   //shortest path
    const dist = {};    // distances from sourceNode to other nodes
    const marked = {};   // Tracks all the visited nodes

    //initialize the dist to each vertex to INFINITE, source to 0
    for (const node in graph) {
        dist[node] = Infinity;
        marked[node] = null;
    }
    dist[sourceNode] = 0;

    //while there are unmarked vertices left in the graph
    while (true) {
        let minDistance = Infinity;
        let unmarked = null;

        //select the unmarked vertex V with the lowest dist
        for (const node in dist) {
            if (!sptSet.has(node) && dist[node] < minDistance) {
                minDistance = dist[node];
                unmarked = node;
            }
        }

        //break point for the while loop if there are no more vertices that are not visited
        if (unmarked === null) break;

        const currentDistance = dist[unmarked];
        const others = graph[unmarked];

        //adds the node to the shortest path
        sptSet.add(unmarked);

        for (const neighbor in others) {
            const edgeWeight = others[neighbor];

            //dist(w)
            dist[neighbor] = Math.min(dist[neighbor], dist[unmarked] + edgeWeight);
        
            if (dist[neighbor] === dist[unmarked] + edgeWeight) {
                marked[neighbor] = unmarked;
            }
        }
    }
    return {dist, marked};
}
