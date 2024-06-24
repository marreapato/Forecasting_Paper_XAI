# Explaining Predictions For the Brazilian Stock Market Index: A Post-Hoc Approach to Deep Learning Models in Time-Series Forecasting

This repository contains the code and resources for the paper titled "Explaining Predictions For the Brazilian Stock Market Index: A Post-Hoc Approach to Deep Learning Models in Time-Series Forecasting". The project involves training deep learning models, evaluating their performance, and explaining their predictions using various techniques. Below is the detailed description and order of execution for the notebooks and scripts used in this project.

## Repository Structure

- **holidays.js**: JavaScript file containing the holiday data for Brazil.
- **TreatingHolidaysData.ipynb**: Notebook for processing the holiday data from `holidays.js` and creating a structured table.
- **DeepModels.ipynb**: Notebook for training deep learning models and evaluating their error metrics.
- **Tcrossvalidation_Evaluation.ipynb**: Notebook for performing cross-validation to assess the models' efficiency and prevent overfitting.
- **EvaluatingExplanaitons.ipynb**: Notebook for evaluating the consistency of explanations, given the inherent randomness in the models.

## Execution Order

To reproduce the results from the paper, please follow the steps below in the specified order:

1. **holidays.js**: 
    - Ensure the `holidays.js` file is in the `Holidays` directory. This file contains the holiday data for Brazil which will be used for further processing.

2. **TreatingHolidaysData.ipynb**:
    - Navigate to the `Holidays` directory and run `TreatingHolidaysData.ipynb`.
    - This notebook imports the holiday data from `holidays.js` and processes it into a structured format suitable for use in the models. The output is a table containing the holiday information.

3. **DeepModels.ipynb**:
    - Go to the `stocks_type_lags` directory and run `DeepModels.ipynb`.
    - This notebook is responsible for training the deep learning models on the stock market data. It also evaluates the models using various error metrics to determine their performance.

4. **Tcrossvalidation_Evaluation.ipynb**:
    - Move to the `Times_cv` directory and run `Tcrossvalidation_Evaluation.ipynb`.
    - This notebook performs cross-validation on the trained models to ensure their efficiency and to prevent overfitting. It helps in verifying that the models' performance is consistent across different subsets of the data.

5. **EvaluatingExplanaitons.ipynb**:
    - Finally, navigate to the `Explanations` directory and run `EvaluatingExplanaitons.ipynb`.
    - This notebook evaluates the explanations generated by the models to check for consistency. Due to the random nature of some models, the explanations might vary. This notebook ensures that the variability in explanations is within acceptable limits.

## Notes

- The results obtained from running these notebooks may vary due to the inherent randomness in the models and the data processing steps. This variability is expected and is part of the model evaluation process.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
