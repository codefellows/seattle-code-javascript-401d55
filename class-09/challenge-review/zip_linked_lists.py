from codefellows.dsa.linked_list import LinkedList

def zip_linked_lists(a, b):

    current_a = a.head
    current_b = b.head

    while current_a and current_b:
        next_a = current_a.next
        next_b = current_b.next
        current_a.next = current_b
        if next_a:
            current_b.next = next_a
        current_a = next_a
        current_b = next_b

    return a if a.head else b


#############################
# TESTS
#############################

# even length
list_a = LinkedList(values=[1,2,3])
list_b = LinkedList(values=['a','b','c'])
zipped = zip_linked_lists(list_a, list_b)
solution = LinkedList(values=[1,'a',2,'b',3,'c'])
assert zipped == solution, zipped

# a shorter
list_a = LinkedList(values=[1,2,])
list_b = LinkedList(values=['a','b','c'])
zipped = zip_linked_lists(list_a, list_b)
solution = LinkedList(values=[1,'a',2,'b','c'])
assert zipped == solution, zipped

# b shorter
list_a = LinkedList(values=[1,2,3])
list_b = LinkedList(values=['a','b',])
zipped = zip_linked_lists(list_a, list_b)
solution = LinkedList(values=[1,'a',2,'b',3,])
assert zipped == solution, zipped

# a empty
list_a = LinkedList()
list_b = LinkedList(values=['a','b','c'])
zipped = zip_linked_lists(list_a, list_b)
solution = LinkedList(values=['a','b','c'])
assert zipped == solution, zipped

# b empty
list_a = LinkedList(values=[1,2,3])
list_b = LinkedList()
zipped = zip_linked_lists(list_a, list_b)
solution = LinkedList(values=[1,2,3])
assert zipped == solution, zipped

print("TESTS PASSED")