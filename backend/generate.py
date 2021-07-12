'''
FileName: generate.py
Author: Chuncheng
Version: V0.0
Purpose: Generate Simulation Data
'''

# %%
import os
import random
import pandas as pd

from tqdm.auto import tqdm
from datetime import datetime

# %%
root = os.path.dirname(__file__)

# %%
num_sections = 7
num_nodes = 400

locations = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
genders = ['Male', 'Female']
dates = ['2020-{:02d}'.format(e) for e in range(1, 13)]

# %%


def rnd_chr():
    if random.randint(0, 10) < 2:
        return ' '
    return chr(random.randint(97, 97+25))


# %%
df = pd.DataFrame(columns=['title', 'description',
                  'gender', 'location', 'date'])

for c in tqdm(range(num_sections)):
    d = dict(
        title='Section {:02d}'.format(c),
        description=''.join([rnd_chr() for _ in range(100)]).title(),
        gender=random.choice(genders),
        location=random.choice(locations),
        date=random.choice(dates)
    )
    df = df.append(d, ignore_index=True)

df.to_json(os.path.join(root, 'simulation_data.json'))
df

# %%
random.randint(0, 100)
# %%
