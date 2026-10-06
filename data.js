// Problem bank. Each problem: [title, leetcode-slug, difficulty E|M|H]
// `intro` = plain-English summary shown at the top of each topic.
// `links` = [label, url] study resources for the topic.
const TOPICS = [
  { id: 'arrays', title: 'Arrays & Hashing', color: '#22c55e',
    intro: 'Arrays store items in order; a hash map (dictionary) lets you look something up instantly instead of scanning. Most beginner problems are solved by "remember what I have seen in a map". Typical cost: one pass = O(n).',
    links: [['NeetCode: Arrays & Hashing', 'https://neetcode.io/roadmap'], ['Programiz: Hash table', 'https://www.programiz.com/dsa/hash-table']],
    patterns: [
    { name: 'Hashing basics', probs: [
      ['Two Sum', 'two-sum', 'E'], ['Contains Duplicate', 'contains-duplicate', 'E'],
      ['Valid Anagram', 'valid-anagram', 'E'], ['Group Anagrams', 'group-anagrams', 'M'],
      ['Top K Frequent Elements', 'top-k-frequent-elements', 'M'],
      ['Longest Consecutive Sequence', 'longest-consecutive-sequence', 'M'],
      ['Subarray Sum Equals K', 'subarray-sum-equals-k', 'M'],
    ]},
    { name: 'Array manipulation', probs: [
      ['Product of Array Except Self', 'product-of-array-except-self', 'M'],
      ['Majority Element', 'majority-element', 'E'], ['Move Zeroes', 'move-zeroes', 'E'],
      ['Sort Colors', 'sort-colors', 'M'], ['Maximum Subarray (Kadane)', 'maximum-subarray', 'M'],
      ['Rotate Array', 'rotate-array', 'M'],
    ]},
    { name: 'Matrix', probs: [
      ['Set Matrix Zeroes', 'set-matrix-zeroes', 'M'], ['Spiral Matrix', 'spiral-matrix', 'M'],
      ['Rotate Image', 'rotate-image', 'M'],
    ]},
  ]},
  { id: 'strings', title: 'Strings', color: '#14b8a6',
    intro: 'A string is an array of characters. Same tricks as arrays: count characters with a map, use two pointers from both ends, or expand outward from a centre (palindromes).',
    links: [['NeetCode roadmap', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'Core', probs: [
      ['Valid Palindrome', 'valid-palindrome', 'E'], ['Is Subsequence', 'is-subsequence', 'E'],
      ['Longest Common Prefix', 'longest-common-prefix', 'E'],
      ['Longest Palindromic Substring', 'longest-palindromic-substring', 'M'],
      ['Palindromic Substrings', 'palindromic-substrings', 'M'],
    ]},
  ]},
  { id: 'twoptr', title: 'Two Pointers & Sliding Window', color: '#3b82f6',
    intro: 'Two pointers: keep two indexes (often one at each end) and move them toward each other. Sliding window: keep a range [left, right] and grow/shrink it while scanning once. Both turn an O(n²) brute force into O(n).',
    links: [['NeetCode: Two Pointers', 'https://neetcode.io/roadmap'], ['Tech Interview Handbook: Array', 'https://www.techinterviewhandbook.org/algorithms/array/']],
    patterns: [
    { name: 'Two pointers', probs: [
      ['Two Sum II (Sorted)', 'two-sum-ii-input-array-is-sorted', 'M'], ['3Sum', '3sum', 'M'],
      ['Container With Most Water', 'container-with-most-water', 'M'],
      ['Trapping Rain Water', 'trapping-rain-water', 'H'],
      ['Remove Duplicates from Sorted Array', 'remove-duplicates-from-sorted-array', 'E'],
    ]},
    { name: 'Sliding window', probs: [
      ['Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', 'E'],
      ['Longest Substring Without Repeating Characters', 'longest-substring-without-repeating-characters', 'M'],
      ['Longest Repeating Character Replacement', 'longest-repeating-character-replacement', 'M'],
      ['Permutation in String', 'permutation-in-string', 'M'],
      ['Minimum Size Subarray Sum', 'minimum-size-subarray-sum', 'M'],
      ['Minimum Window Substring', 'minimum-window-substring', 'H'],
      ['Sliding Window Maximum', 'sliding-window-maximum', 'H'],
    ]},
  ]},
  { id: 'bsearch', title: 'Binary Search', color: '#06b6d4',
    intro: 'If data is sorted, check the middle and throw away half each time: O(log n). It also works on "answers": if you can test "is X big enough?", binary search for the smallest X that works.',
    links: [['NeetCode: Binary Search', 'https://neetcode.io/roadmap'], ['VisuAlgo', 'https://visualgo.net/en']],
    patterns: [
    { name: 'Classic', probs: [
      ['Binary Search', 'binary-search', 'E'], ['Search Insert Position', 'search-insert-position', 'E'],
      ['Sqrt(x)', 'sqrtx', 'E'], ['First Bad Version', 'first-bad-version', 'E'],
      ['Search a 2D Matrix', 'search-a-2d-matrix', 'M'],
    ]},
    { name: 'Rotated arrays', probs: [
      ['Find Minimum in Rotated Sorted Array', 'find-minimum-in-rotated-sorted-array', 'M'],
      ['Search in Rotated Sorted Array', 'search-in-rotated-sorted-array', 'M'],
      ['Find Peak Element', 'find-peak-element', 'M'],
    ]},
    { name: 'Binary search on answer', probs: [
      ['Koko Eating Bananas', 'koko-eating-bananas', 'M'],
      ['Capacity to Ship Packages', 'capacity-to-ship-packages-within-d-days', 'M'],
      ['Median of Two Sorted Arrays', 'median-of-two-sorted-arrays', 'H'],
    ]},
  ]},
  { id: 'linked', title: 'Linked List', color: '#ec4899',
    intro: 'Nodes connected by "next" pointers; no index access, so you walk node by node. Key tricks: slow/fast pointers (find middle, detect cycle), reversing pointers, and a dummy head node to simplify edge cases.',
    links: [['Programiz: Linked list', 'https://www.programiz.com/dsa/linked-list'], ['NeetCode: Linked List', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'Fundamentals', probs: [
      ['Reverse Linked List', 'reverse-linked-list', 'E'], ['Middle of the Linked List', 'middle-of-the-linked-list', 'E'],
      ['Merge Two Sorted Lists', 'merge-two-sorted-lists', 'E'], ['Linked List Cycle', 'linked-list-cycle', 'E'],
      ['Linked List Cycle II', 'linked-list-cycle-ii', 'M'],
    ]},
    { name: 'Intermediate', probs: [
      ['Remove Nth Node From End', 'remove-nth-node-from-end-of-list', 'M'], ['Reorder List', 'reorder-list', 'M'],
      ['Add Two Numbers', 'add-two-numbers', 'M'], ['Copy List with Random Pointer', 'copy-list-with-random-pointer', 'M'],
      ['LRU Cache', 'lru-cache', 'M'],
    ]},
    { name: 'Advanced', probs: [
      ['Merge k Sorted Lists', 'merge-k-sorted-lists', 'H'], ['Reverse Nodes in k-Group', 'reverse-nodes-in-k-group', 'H'],
    ]},
  ]},
  { id: 'stack', title: 'Stack & Queue', color: '#f97316',
    intro: 'Stack = last in, first out (a pile of plates). Queue = first in, first out (a line). A "monotonic stack" keeps items sorted so you can find the next bigger/smaller element in O(n).',
    links: [['Programiz: Stack', 'https://www.programiz.com/dsa/stack'], ['NeetCode: Stack', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'Basics & design', probs: [
      ['Valid Parentheses', 'valid-parentheses', 'E'], ['Min Stack', 'min-stack', 'M'],
      ['Implement Queue using Stacks', 'implement-queue-using-stacks', 'E'],
      ['Evaluate Reverse Polish Notation', 'evaluate-reverse-polish-notation', 'M'],
      ['Decode String', 'decode-string', 'M'],
    ]},
    { name: 'Monotonic stack', probs: [
      ['Daily Temperatures', 'daily-temperatures', 'M'], ['Next Greater Element II', 'next-greater-element-ii', 'M'],
      ['Car Fleet', 'car-fleet', 'M'], ['Asteroid Collision', 'asteroid-collision', 'M'],
      ['Largest Rectangle in Histogram', 'largest-rectangle-in-histogram', 'H'],
    ]},
  ]},
  { id: 'recursion', title: 'Recursion & Backtracking', color: '#a855f7',
    intro: 'Recursion: a function that calls itself on a smaller problem, with a base case to stop. Backtracking: try a choice, recurse, then undo the choice and try the next one. Used for "all subsets / permutations / combinations".',
    links: [['NeetCode: Backtracking', 'https://neetcode.io/roadmap'], ['Tech Interview Handbook: Recursion', 'https://www.techinterviewhandbook.org/algorithms/recursion/']],
    patterns: [
    { name: 'Recursion', probs: [
      ['Fibonacci Number', 'fibonacci-number', 'E'], ['Pow(x, n)', 'powx-n', 'M'],
      ['Generate Parentheses', 'generate-parentheses', 'M'],
    ]},
    { name: 'Subsets / permutations / combinations', probs: [
      ['Subsets', 'subsets', 'M'], ['Subsets II', 'subsets-ii', 'M'], ['Permutations', 'permutations', 'M'],
      ['Combination Sum', 'combination-sum', 'M'], ['Combination Sum II', 'combination-sum-ii', 'M'],
      ['Letter Combinations of a Phone Number', 'letter-combinations-of-a-phone-number', 'M'],
      ['Palindrome Partitioning', 'palindrome-partitioning', 'M'],
    ]},
    { name: 'Grid / constraint search', probs: [
      ['Word Search', 'word-search', 'M'], ['N-Queens', 'n-queens', 'H'],
    ]},
  ]},
  { id: 'sorting', title: 'Sorting, Heaps & Intervals', color: '#10b981',
    intro: 'Good sorting is O(n log n) (merge sort, quick sort). A heap (priority queue) always gives you the smallest or largest item fast, perfect for "top K" questions. Interval problems usually start by sorting by start time.',
    links: [['VisuAlgo: Sorting', 'https://visualgo.net/en/sorting'], ['Programiz: Heap', 'https://www.programiz.com/dsa/heap-data-structure'], ['NeetCode: Heap & Intervals', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'Sorting', probs: [
      ['Sort an Array (Merge Sort)', 'sort-an-array', 'M'], ['Merge Sorted Array', 'merge-sorted-array', 'E'],
      ['Kth Largest Element in an Array', 'kth-largest-element-in-an-array', 'M'],
    ]},
    { name: 'Heap / priority queue', probs: [
      ['Kth Largest Element in a Stream', 'kth-largest-element-in-a-stream', 'E'], ['Last Stone Weight', 'last-stone-weight', 'E'],
      ['K Closest Points to Origin', 'k-closest-points-to-origin', 'M'], ['Task Scheduler', 'task-scheduler', 'M'],
      ['Find Median from Data Stream', 'find-median-from-data-stream', 'H'],
    ]},
    { name: 'Intervals', probs: [
      ['Merge Intervals', 'merge-intervals', 'M'], ['Insert Interval', 'insert-interval', 'M'],
      ['Non-overlapping Intervals', 'non-overlapping-intervals', 'M'], ['Meeting Rooms II', 'meeting-rooms-ii', 'M'],
    ]},
  ]},
  { id: 'trees', title: 'Binary Trees & BST', color: '#8b5cf6',
    intro: 'A tree node has up to two children. Most solutions are a short recursive function: "answer for this node = combine answers from left and right". DFS goes deep first; BFS goes level by level with a queue. In a BST, left < node < right, so search is O(log n) when balanced.',
    links: [['Programiz: Trees', 'https://www.programiz.com/dsa/trees'], ['VisuAlgo: BST', 'https://visualgo.net/en/bst'], ['NeetCode: Trees', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'DFS fundamentals', probs: [
      ['Maximum Depth of Binary Tree', 'maximum-depth-of-binary-tree', 'E'], ['Invert Binary Tree', 'invert-binary-tree', 'E'],
      ['Same Tree', 'same-tree', 'E'], ['Subtree of Another Tree', 'subtree-of-another-tree', 'E'],
      ['Balanced Binary Tree', 'balanced-binary-tree', 'E'], ['Diameter of Binary Tree', 'diameter-of-binary-tree', 'E'],
      ['Lowest Common Ancestor of a Binary Tree', 'lowest-common-ancestor-of-a-binary-tree', 'M'],
    ]},
    { name: 'BFS', probs: [
      ['Level Order Traversal', 'binary-tree-level-order-traversal', 'M'],
      ['Right Side View', 'binary-tree-right-side-view', 'M'], ['Count Good Nodes', 'count-good-nodes-in-binary-tree', 'M'],
    ]},
    { name: 'BST', probs: [
      ['Validate Binary Search Tree', 'validate-binary-search-tree', 'M'], ['Kth Smallest Element in a BST', 'kth-smallest-element-in-a-bst', 'M'],
      ['LCA of a BST', 'lowest-common-ancestor-of-a-binary-search-tree', 'M'],
    ]},
    { name: 'Harder', probs: [
      ['Construct Tree from Preorder & Inorder', 'construct-binary-tree-from-preorder-and-inorder-traversal', 'M'],
      ['Binary Tree Maximum Path Sum', 'binary-tree-maximum-path-sum', 'H'],
      ['Serialize and Deserialize Binary Tree', 'serialize-and-deserialize-binary-tree', 'H'],
    ]},
  ]},
  { id: 'trie', title: 'Tries', color: '#eab308',
    intro: 'A trie is a tree of characters used for fast prefix lookups (autocomplete, dictionary search). Lookup cost depends on word length, not on how many words are stored.',
    links: [['Programiz: Trie', 'https://www.programiz.com/dsa/trie'], ['NeetCode: Tries', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'Trie', probs: [
      ['Implement Trie (Prefix Tree)', 'implement-trie-prefix-tree', 'M'],
      ['Design Add and Search Words', 'design-add-and-search-words-data-structure', 'M'],
      ['Word Search II', 'word-search-ii', 'H'],
    ]},
  ]},
  { id: 'graphs', title: 'Graphs', color: '#38bdf8',
    intro: 'A graph is nodes plus edges (a map, a social network, course prerequisites). A grid is also a graph. BFS finds shortest paths in unweighted graphs; DFS explores everything reachable; topological sort orders tasks with dependencies; Dijkstra handles weighted edges. Complexity is usually O(V + E).',
    links: [['VisuAlgo: Graph traversal', 'https://visualgo.net/en/dfsbfs'], ['Programiz: Graph', 'https://www.programiz.com/dsa/graph'], ['NeetCode: Graphs', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'DFS / BFS', probs: [
      ['Number of Islands', 'number-of-islands', 'M'], ['Max Area of Island', 'max-area-of-island', 'M'],
      ['Clone Graph', 'clone-graph', 'M'], ['Rotting Oranges', 'rotting-oranges', 'M'],
      ['Pacific Atlantic Water Flow', 'pacific-atlantic-water-flow', 'M'], ['Word Ladder', 'word-ladder', 'H'],
    ]},
    { name: 'Topological sort & cycles', probs: [
      ['Course Schedule', 'course-schedule', 'M'], ['Course Schedule II', 'course-schedule-ii', 'M'],
      ['Alien Dictionary', 'alien-dictionary', 'H'],
    ]},
    { name: 'Union-Find', probs: [
      ['Number of Provinces', 'number-of-provinces', 'M'], ['Redundant Connection', 'redundant-connection', 'M'],
      ['Graph Valid Tree', 'graph-valid-tree', 'M'],
    ]},
    { name: 'Shortest paths', probs: [
      ['Network Delay Time (Dijkstra)', 'network-delay-time', 'M'],
      ['Cheapest Flights Within K Stops', 'cheapest-flights-within-k-stops', 'M'],
      ['Min Cost to Connect All Points', 'min-cost-to-connect-all-points', 'M'],
    ]},
  ]},
  { id: 'dp', title: 'Dynamic Programming', color: '#d946ef',
    intro: 'DP = solve a big problem by solving smaller overlapping ones once and remembering the results. Steps: 1) define what dp[i] means, 2) write the formula linking it to earlier values, 3) set base cases. Start with plain recursion, add a memo (cache), then convert to a table.',
    links: [['NeetCode: DP', 'https://neetcode.io/roadmap'], ['Tech Interview Handbook: DP', 'https://www.techinterviewhandbook.org/algorithms/dynamic-programming/']],
    patterns: [
    { name: '1D DP', probs: [
      ['Climbing Stairs', 'climbing-stairs', 'E'], ['House Robber', 'house-robber', 'M'],
      ['House Robber II', 'house-robber-ii', 'M'], ['Decode Ways', 'decode-ways', 'M'],
      ['Word Break', 'word-break', 'M'], ['Jump Game', 'jump-game', 'M'],
      ['Longest Increasing Subsequence', 'longest-increasing-subsequence', 'M'],
    ]},
    { name: 'Knapsack & coin change', probs: [
      ['Coin Change', 'coin-change', 'M'], ['Coin Change II', 'coin-change-ii', 'M'],
      ['Partition Equal Subset Sum', 'partition-equal-subset-sum', 'M'], ['Target Sum', 'target-sum', 'M'],
    ]},
    { name: 'Grid DP', probs: [
      ['Unique Paths', 'unique-paths', 'M'], ['Minimum Path Sum', 'minimum-path-sum', 'M'],
      ['Maximal Square', 'maximal-square', 'M'],
    ]},
    { name: 'Strings (LCS family)', probs: [
      ['Longest Common Subsequence', 'longest-common-subsequence', 'M'], ['Edit Distance', 'edit-distance', 'M'],
      ['Longest Palindromic Subsequence', 'longest-palindromic-subsequence', 'M'],
    ]},
  ]},
  { id: 'greedy', title: 'Greedy', color: '#84cc16',
    intro: 'Greedy = always take the locally best choice and never look back. It is fast (often one sort + one pass) but only valid when you can argue the local choice is safe. Intervals and scheduling are common.',
    links: [['NeetCode: Greedy', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'Greedy', probs: [
      ['Best Time to Buy/Sell Stock II', 'best-time-to-buy-and-sell-stock-ii', 'M'], ['Jump Game II', 'jump-game-ii', 'M'],
      ['Gas Station', 'gas-station', 'M'], ['Partition Labels', 'partition-labels', 'M'],
      ['Hand of Straights', 'hand-of-straights', 'M'], ['Candy', 'candy', 'H'],
    ]},
  ]},
  { id: 'bits', title: 'Bit Manipulation', color: '#f43f5e',
    intro: 'Work directly with the 0/1 bits of numbers using & | ^ << >>. Useful trick: x ^ x = 0, so XOR cancels duplicates. Usually O(1) or O(number of bits).',
    links: [['NeetCode: Bit Manipulation', 'https://neetcode.io/roadmap']],
    patterns: [
    { name: 'Bits', probs: [
      ['Single Number', 'single-number', 'E'], ['Number of 1 Bits', 'number-of-1-bits', 'E'],
      ['Counting Bits', 'counting-bits', 'E'], ['Reverse Bits', 'reverse-bits', 'E'],
      ['Missing Number', 'missing-number', 'E'], ['Sum of Two Integers', 'sum-of-two-integers', 'M'],
    ]},
  ]},
];

// Spaced-repetition review intervals (days) used by the revision queue.
const REVIEW_INTERVALS = [1, 3, 7, 14, 30];

// Resources page content
const RESOURCES = [
  { group: 'Start here (beginner friendly)', items: [
    ['Big-O Cheat Sheet', 'https://www.bigocheatsheet.com/', 'One page of time/space complexity for every common structure and algorithm.'],
    ['Programiz DSA tutorial', 'https://www.programiz.com/dsa', 'Short plain-English explanations with diagrams and code.'],
    ['VisuAlgo', 'https://visualgo.net/en', 'Animations of sorting, trees, graphs: watch the algorithm run step by step.'],
    ['CS50 (Harvard, free)', 'https://cs50.harvard.edu/x/', 'Gentle, excellent intro to programming and data structures.'],
  ]},
  { group: 'Roadmaps & study guides', items: [
    ['NeetCode Roadmap', 'https://neetcode.io/roadmap', 'The topic order this tracker follows, with video solutions.'],
    ['NeetCode 150', 'https://neetcode.io/practice', 'The classic curated interview list.'],
    ['Tech Interview Handbook', 'https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/', 'What to study, cheat sheets per topic, interview tips.'],
    ['LeetCode Explore cards', 'https://leetcode.com/explore/', 'Guided lessons with practice problems per topic.'],
  ]},
  { group: 'YouTube channels', items: [
    ['NeetCode', 'https://www.youtube.com/@NeetCode', 'Clear explanations of each LeetCode problem.'],
    ['take U forward', 'https://www.youtube.com/@takeUforward', 'Long, thorough DSA playlists (good if you like Indian-English teaching).'],
    ['Abdul Bari', 'https://www.youtube.com/@abdul_bari', 'Best for understanding complexity, recursion and algorithms theory.'],
  ]},
  { group: 'Deeper reference', items: [
    ['CP-Algorithms', 'https://cp-algorithms.com/', 'Detailed algorithm write-ups (read after the basics).'],
    ['GeeksforGeeks DSA', 'https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/', 'Huge reference, topic by topic.'],
  ]},
];
