# Revisit Questions

## QUESTION AT 12.15.2020

```javascript
// using this array,
var array2 = ['Banana', ['Apples', ['Oranges'], 'Blueberries']];
// access "Oranges".
```

array2[1][1][0];

Δεν καταλαβαινω γιατι ειναι 1,1,0. Απτο μηδεν δε ξεκιναμε? Δε θα επρεπε να ειναι:

array2[0][0][0];

Εδω βλεπουμε 2 arrays, Το ενα ειναι το "Banana" (το [0] δλδ) και το αλλο ειναι ["Apples", ["Oranges"], "Blueberries"] (το [1] δλδ)..
Για να βρούμε το "Oranges" τώρα παμε στο [1] array που μέσα έχει 0-1-2 ..Συνεπώς πατάμε πάλι [1] για να βρούμε το ζητούμενο που απο μόνο του πάει [0] γιατί ειναι ξεχωριστό από τα άλλα ..! Δημιουργείται έτσι :

array2[1][1][0];
