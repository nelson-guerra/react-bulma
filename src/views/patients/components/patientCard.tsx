import { useState } from 'react';
import { PatientInfo } from '../types/patientInfo';

export function PatienteCard({ patient }: { patient: PatientInfo }) {
	const [activeModal, setActiveModal] = useState(false);

	const handleModal = () => {
		setActiveModal(!activeModal);
	};

	const active = activeModal ? 'is-active' : '';

	return (
		<div className="cell">
			<div className="card is-shady">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={patient.image}></img>
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								<img src={patient.avatar}></img>
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-5 mb-1">{patient.name}</p>
							<p className="title is-6 mb-2">{patient.age} años</p>
							<p className="subtitle is-6">Diagnóstico: {patient.diagnosis}</p>
						</div>
					</div>
					<div className="content">
						<p className="button is-link is-fullwidth" onClick={() => handleModal()}>
							Detalles
						</p>
					</div>
				</div>
			</div>
			<div className={`modal ${active}`}>
				<div className="modal-background" />
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">{patient.name}</p>
						<button onClick={() => handleModal()} className="delete" aria-label="close" />
					</header>
					<section className="modal-card-body">
						<div className="content">{patient.content}</div>
					</section>
					<footer className="modal-card-foot">
						<button onClick={() => handleModal()} className="button">
							Cerrar
						</button>
					</footer>
				</div>
			</div>
		</div>
	);
}
