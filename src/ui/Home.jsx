import { useState } from "react";
import { ButtonPrimary } from "../components/lib/Buttons";
import Input from "../components/lib/Input";
import CardSection from "../components/card-section/CardSection";
import Card from "../components/card/Card";
import SearchBar from "../components/search-bar/SearchBar";
import { getInitialData } from "../utils";

const Home = () => {
  const [notes, setNotes] = useState(getInitialData);
  const [searchValue, setSearchValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  const handleSearchValue = (value) => {
    setSearchValue(value);
  };

  const handleTitleValue = (e) => {
    const value = e.target.value;
    setTitleValue(value.slice(0, 50));
  };

  const handleBodyValue = (e) => {
    const value = e.target.value;
    setBodyValue(value);
  };

  const handleCreateNote = () => {
    if (!titleValue.trim() || !bodyValue.trim()) {
      alert("Judul dan isi catatan tidak boleh kosong");
      return;
    }
    const newNote = {
      id: notes.length + 1,
      title: titleValue,
      body: bodyValue,
      archived: false,
      createdAt: new Date(),
    };
    setNotes([...notes, newNote]);
    setTitleValue("");
    setBodyValue("");
    alert("Berhasil membuat catatan baru!");
  };

  const handleArchiveNote = (noteId) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        if (note.archived === true) {
          return { ...note, archived: false };
        } else {
          return { ...note, archived: true };
        }
      } else {
        return note;
      }
    });

    setNotes(updatedNotes);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <>
      <header className="w-full flex flex-col gap-4 items-center bg-hero-img bg-cover bg-no-repeat">
        <div className="py-20 text-center">
          <h1 className="font-rubik-doodle text-4xl">Dicoding - Aplikasi Catatan Pribadi</h1>
        </div>
        <nav className="w-full bg-slate-500  p-5 flex flex-col items-center">
          <SearchBar onSearch={handleSearchValue} />
        </nav>
      </header>
      <main>
        <article>
          <section className="w-full flex flex-col justify-center items-center gap-4 p-8">
            <p className="text-2xl font-bold">Buat Catatan</p>
            <div className="w-full flex flex-col gap-3 items-center">
              <div className="w-1/2 relative ">
                <Input
                  type="text"
                  value={titleValue}
                  placeHolder={"Masukkan judul ..."}
                  onChange={handleTitleValue}
                  className={
                    "block w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:border-2 focus:border-blue-500"
                  }
                />
                <p className="absolute right-0 bottom-11">Max Character: {50 - titleValue.length}</p>
              </div>
              <textarea
                rows="10"
                placeholder="Masukkan catatan ..."
                onChange={handleBodyValue}
                className="bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:border-2 focus:border-blue-500 block w-1/2"
              />
              <ButtonPrimary onClick={handleCreateNote} title={"Buat"} />
            </div>
          </section>
          <CardSection title="Catatan Aktif">
            {notes.filter((note) => note.archived === false).length > 0
              ? notes
                  .filter((note) => note.archived === false)
                  .filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((note) => (
                    <Card
                      key={note.id}
                      id={note.id}
                      title={note.title}
                      body={note.body}
                      archived={note.archived}
                      createdAt={note.createdAt}
                      isArchieve={handleArchiveNote}
                      onDelete={handleDeleteNote}
                    />
                  ))
              : "Tidak ada catatan"}
          </CardSection>
          <CardSection title="Arsip Catatan">
            {notes.filter((note) => note.archived === true).length > 0
              ? notes
                  .filter((note) => note.archived === true)
                  .filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((note) => (
                    <Card
                      key={note.id}
                      id={note.id}
                      title={note.title}
                      body={note.body}
                      createdAt={note.createdAt}
                      archived={note.archived}
                      isArchieve={handleArchiveNote}
                      onDelete={handleDeleteNote}
                    />
                  ))
              : "Tidak ada catatan"}
          </CardSection>
        </article>
      </main>
    </>
  );
};

export default Home;
