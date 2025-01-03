import { PatienteCard } from './components/patientCard';
import { patientList } from './data/patientList';

export function Patients() {
	return (
		<div className="grid is-col-min-10 is-gap-3">
			{patientList.map((patient, index: number) => (
				<PatienteCard patient={patient} key={`card-${index}-${patient.id}`} />
			))}
		</div>
	);
}
