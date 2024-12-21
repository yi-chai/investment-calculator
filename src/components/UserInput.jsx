import {InputNumber, Typography} from "antd";

const {Title} = Typography;

export default function UserInput({input, onChangeInput}) {
    return (
        <form id="user-input">
            <div className="input-group">
                <Title level={5}>Initial Investment</Title>
                <InputNumber
                    required
                    value={input.initialInvestment}
                    onChange={(e) => onChangeInput("initialInvestment", e)}
                    controls={false}
                />
            </div>
            <div className="input-group">
                <Title level={5}>Annual Investment</Title>
                <InputNumber
                    required
                    value={input.annualInvestment}
                    onChange={(e) => onChangeInput("annualInvestment", e)}
                    controls={false}
                />
            </div>
            <div className="input-group">
                <Title level={5}>Expected Return</Title>
                <InputNumber
                    required
                    value={input.expectedReturn}
                    onChange={(e) => onChangeInput("expectedReturn", e)}
                    controls={false}
                />
            </div>
            <div className="input-group">
                <Title level={5}>Duration</Title>
                <InputNumber
                    required
                    value={input.duration}
                    onChange={(e) => onChangeInput("duration", e)}
                    controls={false}
                />
            </div>
        </form>
    );
}
