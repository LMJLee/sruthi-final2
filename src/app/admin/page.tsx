"use client";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { imgDB, txtDB } from "@/firebase";

import AdminGalleryClass from "./AdminGalleryClass";
import { SelectedPage, ClassType } from "@/shared/types";

interface DataType {
	id: string;
	txtVal: string;
	imgUrl: string;
}

function Admin() {
	const session = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/signin");
		}
	});

	const [txt, setTxt] = useState("");
	const [img, setImg] = useState("");
	const [GalleryData, setData] = useState<DataType[]>([]);

	const getData = async () => {
		const valRef = collection(txtDB, "txtData"); // Ensure the collection name matches what was used in handleClick
		const dataDb = await getDocs(valRef);
		const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id })) as DataType[];
		setData(allData);
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(GalleryData, "datadata");

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
		<section>
			<div className=" admin  ">
				<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Caption</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Caption"
						value={txt}
						onChange={e => setTxt(e.target.value)}
					/>
					<div className="py-3">
						<p className="text-red-500 text-xs italic">Choose file to upload!</p>
					</div>
					<div className="py-3">
						<input type="file" onChange={e => handleUpload(e)} />
					</div>

					<div className="flex items-center justify-between">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>
							Add
						</button>
					</div>

					<div className="text-black py-2">{session?.data?.user?.email}</div>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => signOut()}>
						Logout
					</button>
				</div>
			</div>
			<div className="admin">
				<div className=" py-5 mt-10   overflow-x-auto overflow-y-hidden" style={{ display: "grid", gridGap: "14px", gridTemplateColumns: "repeat(600px 600px)" }}>
					<ul className=" px-40     whitespace-wrap">
						{GalleryData.map(item => (
							<div className=" border-2 border-indigo-600">
								<AdminGalleryClass key={`${item.id}`} name={item.txtVal} image={item.imgUrl} />
								<div className="p-5">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(item.id)}>
										Delete
									</button>
								</div>
							</div>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Admin;
