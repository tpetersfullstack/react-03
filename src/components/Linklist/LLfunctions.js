class ListNode {
  constructor(subject, amount) {
    this.nextNode = null;
    this.subject = subject;
    this.amount = Number(amount);
  }
  show() {
    return { subject: this.subject, amount: this.amount };
  }
}
// ---------------------
class LinkedList {
  constructor() {
    // Does not need any Input properties
    this.current = null;
    this.headNode = null;
    // this.nextNode = null;
    this.listAmount = 0;
  }
  showList() {
    // record current pointer posn.
    const storedLocn = this.current;
    // set pointer to the begining of the list.
    this.first();
    const outputArr = [];
    while (this.current.nextNode !== null) {
      // while (!this.current.nextNode) {
      outputArr.push([
        this.current.subject,
        this.current.amount,
        this.current.nextNode.subject
      ]);

      this.next();
    }
    this.next();
    outputArr.push([this.current.subject, this.current.amount, "null"]);

    // console.log(outputArr);
    this.current = storedLocn;
    return outputArr;
  }

  first() {
    // directly set to the head Node
    this.current = this.headNode;
    return this.current;
  }

  prev() {
    if (this.current !== this.headNode) {
      const startLoc = this.current;
      this.first(); // go to top
      while (this.current.nextNode !== startLoc) {
        // console.log("Prev/head", this.headNode);
        // console.log("Prev/startLoc", this.headNode);
        this.next();
        // this.current = this.current.nextNode;
      }
    }

    return this.current;
  }

  last() {
    // if nextnode is !null for the current Node  keep doing next()
    while (this.current.nextNode) {
      // console.log(this.current);
      this.next();
      // console.log(this.current);
    }
    return this.current;
  }

  next() {
    // debugger;
    if (this.current.nextNode) {
      this.current = this.current.nextNode;
    }

    return this.current;
  }

  add(subject, amount) {
    // const prevNode = this.current;
    const node = new ListNode(subject, amount);
    this.listAmount += Number(node.amount);
    if (!this.headNode) {
      // list is empty
      this.current = node;
      this.headNode = node;
      // return (this.current = this.headNode = node);
    } else {
      // first set where the current next node to the new node as it is inserted between existing nodes

      node.nextNode = this.current.nextNode;
      this.current.nextNode = node;
      this.current = node;
    }
    return this.current;
  } //add

  delete() {
    // only do something if list not empty
    if (this.headNode) {
      let marker = this.current;
      this.listAmount -= Number(marker.amount);

      // if deleting the head
      if (this.current === this.headNode) {
        // console.log("Deleting HeadNode");
        this.current = this.current.nextNode;
        this.headNode = this.current;
        // return this.current;
      } else if (this.current.nextNode !== null) {
        // if deleting intermediate  ones

        // current s next node is null, ie not the last entry
        // console.log("Deleting Intermediate Node");
        // set Prev node's next node to this nextnode
        this.prev();
        this.current.nextNode = this.current.nextNode.nextNode;

        // return (this.current = prevNode); // return the previous node to be consistnt  with the last Node removal action
      } else {
        //if deleting End Node
        // if (this.current !== this.headNode && this.current.nextNode == null)

        // console.log("Deleting Last Node");
        this.prev();
        this.current.nextNode = this.current.nextNode.nextNode;
      }
    }
    return this.current;
  }
}

export { ListNode, LinkedList };
