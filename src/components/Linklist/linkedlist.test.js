import { ListNode, LinkedList } from "./LLfunctions.js";
//
test("Test ll Functions: ", () => {
  //consolelog("Hello from ll functions test");
  let llist = new LinkedList();
  llist.add("One", 100);
  llist.add("Two", 200);
  llist.add("Three", 300);
  expect(llist.current.subject).toBe("Three");
  expect(llist.listAmount).toBe(600);
  //consolelog("Original List");
  llist.showList();
  llist.first();
  expect(llist.current.subject).toBe("One");

  llist.next();
  expect(llist.current.subject).toBe("Two");

  llist.next();
  expect(llist.current.subject).toBe("Three");
  llist.prev();
  expect(llist.current.subject).toBe("Two");

  //add in between
  llist.add("Four", 400);
  expect(llist.current.subject).toBe("Four");
  llist.prev();
  expect(llist.current.subject).toBe("Two");

  llist.next(); //Four
  llist.next();
  expect(llist.current.subject).toBe("Three");

  // add at end
  llist.last();
  expect(llist.current.subject).toBe("Three");
  llist.add("Five", 500);
  expect(llist.current.subject).toBe("Five");

  llist.showList();
  // add as Second. Head can only be deleted
  llist.first();
  expect(llist.current.subject).toBe("One");
  llist.add("Six", 600);
  expect(llist.current.subject).toBe("Six");
  llist.next();
  expect(llist.current.subject).toBe("Two");
  llist.prev();
  llist.prev();
  expect(llist.current.subject).toBe("One");
  //consolelog("After Insertions");
  llist.showList(); // get a visual on status
  expect(llist.headNode.subject).toBe("One");

  // test remove Head
  llist.first();
  expect(llist.current.subject).toBe("One");
  llist.delete();
  expect(llist.headNode.subject).toBe("Six");
  expect(llist.current.subject).toBe("Six");

  // llist.showList(); // get a visual on status
  // test remove Intermediate
  llist.next();
  llist.next();
  expect(llist.current.subject).toBe("Four");
  llist.delete();
  expect(llist.headNode.subject).toBe("Six");

  //consolelog("After Deletions");
  llist.showList();

  //Test for deleting End Node
  llist.last();
  expect(llist.current.subject).toBe("Five");
  llist.delete();
  expect(llist.current.subject).toBe("Three");
  expect(llist.listAmount).toBe(1100);
  //consolelog("After last Deletions");
  llist.showList();
});
