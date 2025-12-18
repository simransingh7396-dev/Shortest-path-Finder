# Shortest-path-Finder
A high-performance C++ engine that calculates shortest paths in unweighted graphs using Breadth-First Search (BFS). Implements efficient Adjacency Lists for O(V+E) time complexity.

#  Graph Traversal & Shortest Path Engine

**A C++ implementation of the Breadth-First Search (BFS) algorithm to analyze graph connectivity and find shortest paths.**

This project demonstrates a deep understanding of Data Structures and Algorithms (DSA) by building a raw implementation of graph traversal logic using the C++ Standard Template Library (STL). It is designed to be memory-efficient and scalable for unweighted graphs.

###  Technical Highlights
* **Algorithm:** Implements **Breadth-First Search (BFS)** to guarantee the shortest path in unweighted graphs.
* **Data Structure:** Uses **Adjacency Lists** (`std::vector<std::vector<int>>`) instead of Adjacency Matrices to optimize space complexity from $O(V^2)$ to $O(V+E)$.
* **Complexity:** Achieves a time complexity of **$O(V + E)$** (Vertices + Edges) and space complexity of $O(V)$.
* **STL Mastery:** efficient usage of `std::queue`, `std::vector`, and `std::list` for dynamic memory management.

###  Tech Stack
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![STL](https://img.shields.io/badge/STL-Standard_Template_Library-orange?style=for-the-badge)

###  How It Works
1.  **Input:** The program accepts a number of nodes (V) and edges (E), followed by the connections between them.
2.  **Processing:** It initializes a boolean `visited` array and a `distance` array.
3.  **Traversal:** Uses a Queue to explore neighbors layer-by-layer.
4.  **Output:** Prints the shortest distance from the source node to all other nodes.

---
*Developed by Simran Singh*
