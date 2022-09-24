import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./components/Forms/NoteForm/NoteForm";
import { MainContainer } from "./components/MainContainer";
import { UnArchiveForm } from "./components/Forms/UnArchiveForm/UnArchiveForm";

export const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <div className={styles["main-container"]}>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/note-form" element={<Form />} />
            <Route path="/unarchive" element={<UnArchiveForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
