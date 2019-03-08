import React from "react";
import CurrencyFormat from "react-currency-format";
import PropTypes from "prop-types";

const economy = props => {
  return props.economy.map((economy, index) => (
    <div className="col-sm-6 col-xl-3 mb-4" key={index}>
      <div className="card">
        <div className="card-body media align-items-center px-xl-3">
          <div className="u-doughnut u-doughnut--70 mr-3 mr-xl-2">
            <canvas
              className="js-doughnut-chart"
              width="70"
              height="70"
              data-set="[25, 65]"
              data-colors={economy.amount > 50000 ? '["#2972fa","#f6f9fc"]' : economy.amount > 30000 && economy.amount < 50000 ? '["#0dd157","#f6f9fc"]' : economy.amount > 3000 && economy.amount < 6000 ? '["#fb4143","#f6f9fc"]' : '["#fab633","#f6f9fc"]'}
            />

            <div className="u-doughnut__label text-info">{economy.stats}</div>
          </div>

          <div className="media-body">
            <h5 className="h6 text-muted text-uppercase mb-2">
              {economy.title} <i className={economy.amount > 30000 ? 'fa fa-arrow-up text-success ml-1' : 'fa fa-arrow-down text-danger ml-1'
              } />
            </h5>
            <span className="h2 mb-0">
              <CurrencyFormat
                value={economy.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  ));
};

economy.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number
};

export default economy;
