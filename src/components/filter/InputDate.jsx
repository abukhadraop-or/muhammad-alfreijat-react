import React, { useEffect, useState } from "react";
import selectFilter from "utils/selectFilter";
import useFilter from "hooks/useFilters";
import { DatePicker } from "antd";
import {
  InputDateContainer,
  DateLabel,
  DateContainer,
} from "components/filter/filterStyles";

/**
 * A component that set the date filter.
 *
 */
function InputDate() {
  const [gteDate, setGteDate] = useState(new Date());
  const [lteDate, setLteDate] = useState("");
  const { filter, setFilter } = useFilter();

  useEffect(() => {
    const fromDate = lteDate ? lteDate.toISOString().slice(0, 10) : "";
    selectFilter("dateGte", fromDate, filter, setFilter);
  }, [lteDate]);
  useEffect(() => {
    const toDate = gteDate ? gteDate.toISOString().slice(0, 10) : "";
    selectFilter("dateLte", toDate, filter, setFilter);
  }, [gteDate]);
  return (
    <>
      <InputDateContainer>
        <DateLabel htmlFor="ltedate">From</DateLabel>
        <DateContainer>
          <DatePicker
            className="date_picker"
            id="ltedate"
            selected={lteDate}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => setLteDate(date)}
          />
        </DateContainer>
      </InputDateContainer>
      <InputDateContainer>
        <DateLabel htmlFor="gtedate">To</DateLabel>
        <DateContainer>
          <DatePicker
            className="date_picker"
            id="gtedate"
            selected={gteDate}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => setGteDate(date)}
          />
        </DateContainer>
      </InputDateContainer>
    </>
  );
}

export default InputDate;
