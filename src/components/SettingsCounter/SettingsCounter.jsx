import './SettingsCounter.css';

const SettingsCounter = ({initial, name}) => {
	return (
		<div class="settings__counter">
			<p class="settings__counter--name">{name}</p>
			<div class="settings__counter--container">
				<input type="text" value={initial} readOnly/>
			</div>
		</div>
	)
}

export default SettingsCounter;