import * as p_ from 'pareto-core/interface/schema'



/**
 * a very simple tree structure, where the nodes are dictionaries and the leaves are empty objects
 * this can be used to generate a tree of phrases, where the keys of the dictionaries are the phrases and the leaves are empty objects
 * 
 * example:
 * 
 * A
 *    B1
 *       C1
 *       C2
 *    B2
 *       C3
 */
export type Node = p_.Dictionary<Node>