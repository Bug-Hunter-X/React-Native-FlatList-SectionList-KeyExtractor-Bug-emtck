# React Native FlatList KeyExtractor Bug

This repository demonstrates a common but easily missed error in React Native's FlatList and SectionList components: incorrect or missing keyExtractor functions.  Improperly defined keys lead to unexpected rendering behavior, such as items failing to update, disappearing, or being displayed out of order.

The `bug.js` file shows the flawed implementation.  `bugSolution.js` provides the corrected version.  This example focuses on the scenario where keys aren't unique.