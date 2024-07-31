"use client";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { imgDB, txtDB } from "@/app/firebase";
import { SelectedPage, ClassType } from "../shared/types";

import { idText } from "typescript";
import AdminGalleryClass from "./AdminGalleryClass";

interface DataType {
	id: string;
	txtVal: string;
	imgUrl: string;
}

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

function Admin() {
	const session = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/signin");
		}
	});

	const [txt, setTxt] = useState("");
	const [img, setImg] = useState("");
	const [MixedData, setData] = useState<DataType[]>([]);

	const getData = async () => {
		const valRef = collection(txtDB, "txtData"); // Ensure the collection name matches what was used in handleClick
		const dataDb = await getDocs(valRef);
		const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }));
		setData(allData);
		console.log(dataDb);
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(MixedData, "datadata");

	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.files![0]);
		const imgs = ref(imgDB, `Imgs/${v4()}`);
		uploadBytes(imgs, e.target.files![0]).then(data => {
			console.log(data, "imgs");
			getDownloadURL(data.ref).then(val => {
				setImg(val);
			});
		});
	};

	const handleClick = async () => {
		const valRef = collection(txtDB, `txtData`);
		await addDoc(valRef, { txtVal: txt, imgUrl: img });
		alert("Data added successfully!");
		setTxt("");
		setImg("");
		getData();
	};

	const handleDelete = async (id: string) => {
		const deleteVal = doc(txtDB, "txtData", id);
		await deleteDoc(deleteVal);
		alert("Data deleted successfully!");
		getData();
	};

	return (
		<>
			<div className="bg-white mx-auto display-flex h-[400px] ">
				<input value={txt} onChange={e => setTxt(e.target.value)} />
				<br />
				<input type="file" onChange={e => handleUpload(e)} />
				<br />
				<button onClick={handleClick}>Add</button>

				<div className="p-8">
					<div className="text-black">{session?.data?.user?.email}</div>
					<button className="text-black" onClick={() => signOut()}>
						Logout
					</button>
				</div>
			</div>

			<div className=" py-5 mt-10 h-full w-full overflow-x-auto overflow-y-hidden" style={{ display: "grid", gridGap: "14px", gridTemplateColumns: "repeat(600px 600px)" }}>
				<ul className=" px-40 w-full   whitespace-wrap">
					{MixedData.map(item => (
						<>
							<div className=" border-2 border-indigo-600">
								<AdminGalleryClass key={`${item.id}`} name={item.txtVal} image={item.imgUrl} />
								<div className="p-5">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(item.id)}>
										Delete
									</button>
								</div>
							</div>
						</>
					))}
				</ul>
			</div>
		</>
	);
}

export default Admin;
