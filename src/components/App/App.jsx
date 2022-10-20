import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, PageTitle, ContactsTitle } from './App.styled';

const App = function () {
  return (
    <Container>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />

      <ContactList />
    </Container>
  );
};

export default App;
