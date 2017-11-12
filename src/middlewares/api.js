import { START, SUCCESS, FAIL } from "../constants";

export default store => next => action => {
  if (!action.callAPI) return next(action);

  const { callAPI, type, ...rest } = action;
  next({ ...rest, type: type + START });

  fetch(callAPI, { mode: "cors", cache: "force-cache" })
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      return response.json();
    })
    .then(function(collection) {
      // TODO: dev only !!!!
      // setTimeout(() => {
      //   next({ ...rest, type: type + SUCCESS, collection });
      // }, 2000);

      next({ ...rest, type: type + SUCCESS, collection });
    })
    .catch(function(err) {
      next({ ...rest, type: type + FAIL, err });
      console.log("Fetch Error :-S", err);
    });

  // next(action);
};
