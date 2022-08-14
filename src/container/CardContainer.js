import { connect } from "react-redux";
import Card from "../component/Card";

const mapStateProps = (state) => {
  return {
    currency: state.currency,
  };
};

export const CardContainer = connect(mapStateProps)(Card);
