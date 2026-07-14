import json

log_file = r"C:\Users\Parth Patel\.gemini\antigravity\brain\6cfaf5fc-c03e-47e5-ab69-e134735c6696\.system_generated\logs\transcript.jsonl"

user_inputs = []
with open(log_file, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            obj = json.loads(line)
            if obj.get('type') == 'USER_INPUT':
                user_inputs.append(obj)
        except:
            pass

print("Last 5 User Inputs:")
for ui in user_inputs[-5:]:
    print(f"Step {ui.get('step_index')}: {ui.get('content')}")
