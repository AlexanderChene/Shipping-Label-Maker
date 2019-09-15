## The part I'm most proud of

The part I'm most proud of is the reusable components. This is also the part I love most about coding with react.
This save a lot of work for the whole team.

In the core/common folder. I created the reusable field (SLMfield) and reusable button (SLMButton) which can be used everywhere in the application.
The reusable field component contains type: text, zip, Integer, floatNumber, radio
It receive field Label, field type and onChange function as props to render.
All the form fields in each steps are using this component.

(different fields also combined with different validation rules)

The same idea to my resuable button. (props: onClick function, label, style)

## The part can be developed more

As you can see, the resusable field contains some simple validation rules for zip, integer, float.
For further developing, more user-friendly and complex validations can be included.
Instead of avoid user typing in wrong input and alert, I can show some error messages as a reminder when user type in inproper input.

Also, more cases can add to the reusable fields like currency input, datetime, dropdown, email and multi-select, etc.
The reusable field can be more powerful.


### How to run

1. Download this repository

2. npm install

3. npm start, Open [http://localhost:3000] to view

