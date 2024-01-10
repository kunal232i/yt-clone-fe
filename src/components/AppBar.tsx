import {SearchBar} from "@components/SearchBar"

export const AppBar = () => {

    return (
        <div className="p-2 flex justify-between">
            <img className="bg-red-500 h-10" src="/youtube.png"></img>
            <SearchBar />
            <span className="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"/></svg></span>     
            <span className="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M8 14.5a6.47 6.47 0 0 0 3.25-.87V11.5A2.25 2.25 0 0 0 9 9.25H7a2.25 2.25 0 0 0-2.25 2.25v2.13A6.47 6.47 0 0 0 8 14.5m4.75-3v.937a6.5 6.5 0 1 0-9.5 0V11.5a3.752 3.752 0 0 1 2.486-3.532a3 3 0 1 1 4.528 0A3.752 3.752 0 0 1 12.75 11.5M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M9.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/></svg></span>
        </div>
    )

}