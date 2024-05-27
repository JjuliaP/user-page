# Project Documentation

## Technologies Used

- Angular v17
- TailwindCSS
- ESLint
- Prettier

## Angular Components

Some Angular components are written as standalone components, some as modules to demonstrate the difference in the approaches.

## HTML/CSS

- SCSS variables for local values
- CSS variables for global values
- Flexbox and grid layout where possible for easier mobile development in the future
- BEM CSS approach example
- CSS techniques for small icons to reduce HTML code
- HTML entities for icons to reduce code
- Tailwind configurations contain custom colors, fonts, and styles
- Animation on file dropdown hover for better UX
- Semantic HTML tags
- Native dialog as modal
- Tabindex to make elements accessible
- Named content projection to make modal more configurable for future various modal layouts
- Icons and component styles from design library
- Used auto collapse sidebar on small windows

## Angular/Typescript

- Control value accessor for custom reactive form components
- i18n for label pluralization
- HostListener for drag events
- Angular pipes for date formatting
- Form validators for inputs
- Form split into subcomponents for better code maintenance
- Unused components' files removed as not needed
- Plain FormData for form submission
- API service for form submission
- 404 page
- feature-coming page
- Service worker for basic caching and prefetching functionality
- github pages to host the app

## Router Functionality

- Router functionality for page SPA navigation
- Used hash mode routing

## Layout and Navigation

In the left part, there is a sidebar menu. It opens/closes by clicking on the button in the upper left corner. The menu items in the Users block are clickable and take the user to different pages:
- /user-list - takes the user to the page with the implemented design
- /user-edit - mocked feature-in-progress page
- /roles - mocked feature-in-progress page
- /setting - redirects user to 404 Page. It's a possibility to test Angular wildcard router.

At the top is the menu, which is common to all pages.

## User List Page

There are 2 main form blocks on the /user-list page.

### Left Form Block

The left one is for choosing a role and permissions. Here, the user can select several roles from the dropdown menu. Selected roles appear to the left of this menu. If no role is selected, the user will see the text “Select role”.

Below is an opportunity to select a CRUD permission for the user by clicking on it. The selected permission will have a white background with a gray frame.

### Right Form Block

The right block contains fields for entering basic information about the user. The main fields are name, last name, birthday, email. There are asterisks next to these fields. The user can download multiple files via drag and drop or by clicking on the field with the mouse. The user can view the selected files with a list in the field. There is a delete button next to each file on the right side.
Fields contain the following validations:
- Name, Last Name:
  - Minlength: 2
  - Required
  - Only letters
- Date of birth:
  - Required
- Email:
  - Required
  - Email pattern

There are colorful buttons at the top of the page. The Block button opens a modal window. The modal window is made of a separate component with the possibility of named content projection. We have the ability to change the content in the header, main, and footer sections.

The Save button sends a POST request to the test URL address. The body of the request contains data entered by the user in the FormData format. The Interceptor intercepts this request (since a request to a fictitious URL will always return a 404 status) and returns a response in the console with a 200 status and the same request body. The interception of the request occurs by monitoring the request header 'Mock-Header'.

## Plans for future (what can be improved)

- svg sprite for main icon sizes (i.e. 12px & 24px)
- chips component has been created via material ui components in the example. we could do the same in order to reduce custom code
- implement more modals with different layouts
- implement rest of the CVA methods in components (i.e. onTouched and setDisabledState)
- make tabs more universal (tab options array + ngFor + TabsComponent)
- move constants,types and interfaces to separate files in the shared block
- add guard to prevent page navigation if form not submitted but is dirty
- spinner/loader for data fetching
- limit file extensions or maximum size allowed to upload
- increase test coverage to a minimum of ~80%